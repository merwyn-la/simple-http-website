// level-ci.config.ts
import type { Config } from "@level-ci/cli";
export default {
 organization: "merwyn-carrillos-levelaccess-com",
 project: "manual-repo",
 token: process.env.LEVEL_CI_TOKEN,
 reportPaths: ['./level-ci-reports']
} satisfies Config;
