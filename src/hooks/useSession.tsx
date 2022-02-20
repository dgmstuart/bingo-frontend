import { useState, useEffect, useMemo } from "react";
import GuaranteedJsonSession from "../lib/GuaranteedJsonSession";

type GetterSetter<T> = [T, (data: T) => void];

const useSession = function <T>(initialData: () => T): GetterSetter<T> {
  const session = useMemo(
    () => new GuaranteedJsonSession<T>(initialData),
    [initialData]
  );

  const [data, setData] = useState<T>(session.sessionData);

  useEffect(() => {
    session.sessionData = data;
  }, [session, data]);

  return [data, setData];
};

export default useSession;
