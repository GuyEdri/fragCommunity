import { queryMasterServer, REGIONS } from "steam-server-query";
import { queryGameServerInfo } from "steam-server-query";
import { queryGameServerPlayer } from "steam-server-query";
import { queryGameServerRules } from "steam-server-query";

// queryGameServerInfo("181.214.197.197:10203")
//   .then((infoResponse) => {
//     console.log("info!!!!!!!!!!!!!");
//     console.log(infoResponse);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// queryGameServerPlayer("181.214.197.197:10203")
//   .then((playerResponse) => {
//     console.log("Players info!!!!!!!!!!!!!");
//     console.log(playerResponse);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// queryGameServerRules("181.214.197.197:10203")
//   .then((rulesResponse) => {
//     console.log("rules !!!!!!!!!!!!!!!!1");
//     console.log(rulesResponse);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// //181.214.197.197:10205
