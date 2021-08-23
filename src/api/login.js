import service from "./http";
import qs from "qs";

export function postLogin(parameter) {
  parameter.password = encodeURIComponent(parameter.password);
  return service({
    url: `auth/aggregation/login?${qs.stringify(parameter)}`,
    method: "POST",
  });
}
