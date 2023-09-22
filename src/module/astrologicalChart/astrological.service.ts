import { Injectable } from "@nestjs/common";
import axios from "axios";
import { AstrologicalError } from "./errorHandler/astrological.error";
import {AstrologicalDto,AstrologicalRequestDto} from "./dto/astrologicalChart.dto";
import {astrologicalChartResponse,astrologicalRespose,geoTimeResponse,geoTimequeryParams} from "./interface/astrologicalChart.interface";

@Injectable()
export class AstrologicalService {
  private formatResponse(people: AstrologicalDto,{ zoneName, utc, gmtOffset },astrologicalChart: astrologicalChartResponse): astrologicalRespose {
    return {
      name: people.name,
      gender: people.gender,
      localTime: people.localTime,
      utc: utc,
      tz: zoneName,
      offset: gmtOffset,
      geo: {
        lat: people.lat,
        lng: people.lng,
      },
      ayanmashaValue: astrologicalChart.ayanamsha.value,
      chartLongitudes: astrologicalChart.longitudes,
    };
  }

  async astrological(payload: AstrologicalRequestDto) {
    try {
      return await Promise.all(
        payload.data.map(async (people: AstrologicalDto) => {
          const loc = `${people.lat},${people.lng}`;
          const geoTimeQuery: geoTimequeryParams = {loc,dtl: people.localTime,};
          const getGeoTimeRes = await axios.get<geoTimeResponse>("https://services.findingyou.co/gtz/geotime",{ params: geoTimeQuery });
          const dt = getGeoTimeRes.data!.time!.utc;
          const astrologicalChartQuery = { dt, loc, aya: "tc", sid: 1 };
          const astrologicalChartRes =await axios.get<astrologicalChartResponse>("https://astroapi.findingyou.co/positions",{ params: astrologicalChartQuery });
          const astrologicalRes: astrologicalRespose = this.formatResponse(people,getGeoTimeRes.data.time,astrologicalChartRes.data);
          return astrologicalRes;
        })
      );
    } catch (error) {
      console.log(error);
      throw new AstrologicalError("Somthing went to wrong. Please contact to support");
    }
  }
}
