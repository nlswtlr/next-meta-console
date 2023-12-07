import App from "./App";
import ErrorBoundary from "./modules/ErrorBoundary";

export type MetaConsoleProps = {
  enabled: boolean;
};

const NextMetaConsole = ({ enabled, ...restProps }: MetaConsoleProps) =>
  enabled ? (
    <ErrorBoundary>
      <App {...restProps} />
    </ErrorBoundary>
  ) : null;

export default NextMetaConsole;
