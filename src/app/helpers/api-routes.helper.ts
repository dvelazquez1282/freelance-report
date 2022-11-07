import { environment } from "src/environments/environment"

/**
 * Helper class for build the routes needed for the API requests
 */
export class ApiRoutes {
    private static PREFIXES = {
        timing: 'timings'
    }

    public static getListRoute(model: any) {
        return ApiRoutes.getAPIHostRoute() + "/" + ApiRoutes.PREFIXES[model as keyof typeof ApiRoutes.PREFIXES];
    }


    private static getAPIHostRoute(): string {
        return environment.host + environment.api_version
    }
}
