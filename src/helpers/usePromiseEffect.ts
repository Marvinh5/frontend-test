import React from "react";

export default function usePromiseEffect<T = unknown>(
  promise: () => Promise<T>,
  callback: (data: T)=> void,
  deps: React.DependencyList = []
) {
  React.useEffect(() => {
    let subscribed = true;

    promise()?.then((data) => {
      if (subscribed) {
        return callback(data)
      }
    });
    
    return () => {
      subscribed = false;
    };

  }, deps);
}
