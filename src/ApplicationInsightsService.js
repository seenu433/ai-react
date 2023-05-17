import { ApplicationInsights } from "@microsoft/applicationinsights-web"
import { ReactPlugin } from "@microsoft/applicationinsights-react-js"

const reactPlugin = new ReactPlugin()
const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      "InstrumentationKey=6a7d0f03-c5f8-4404-94ce-7a83ff453368;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/",
    extensions: [reactPlugin],
    extensionConfig: {},
    enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true
  }
})
appInsights.loadAppInsights()

appInsights.addTelemetryInitializer(env => {
  env.tags = env.tags || []
  env.data["ai.cloud.role"] = "testTag"
})

export { reactPlugin, appInsights }
