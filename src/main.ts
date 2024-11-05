import { logger } from "./apps/logging";
import { web } from "./apps/web";

web.listen(3000, () => {
  logger.info("Listening on port 3000");
});
