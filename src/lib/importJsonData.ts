type EmptyObject = Record<string, never>;
type Result<T> =
  | { success: true; data: T }
  | { success: false; data: EmptyObject };

const importJsonData = async <T>(listName: string): Promise<Result<T>> => {
  try {
    return {
      success: true,
      data: (await import(`../data/${listName}.json`)).default,
    };
  } catch (error) {
    console.error("Failed to load the data", error);
    return {
      success: false,
      data: {},
    };
  }
};

export default importJsonData;
