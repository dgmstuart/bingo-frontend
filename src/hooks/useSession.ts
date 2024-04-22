import { useState, useEffect, useMemo } from "react";
import GuaranteedJsonSession from "../lib/GuaranteedJsonSession";

type GetterSetter<T> = [T, (data: T) => void];

const useSession = function <T>({
  keyName,
  initFunction,
}: {
  keyName: string;
  initFunction: () => T;
}): GetterSetter<T> {
  const session = useMemo(
    () => new GuaranteedJsonSession<T>({ keyName, initFunction }),
    [initFunction],
  );

  const [data, setData] = useState<T>(session.sessionData);

  useEffect(() => {
    session.sessionData = data;
  }, [session, data]);

  return [data, setData];
};

export default useSession;
