import { act, renderHook } from "@testing-library/react";
import { useTabBar } from "@/hooks/useTabBar";

describe("useTabBar", () => {
  it("should change tabActive when passed new value on onClickTab", () => {
    const { result } = renderHook(() => useTabBar());

    act(() => {
      result.current.onClickTab("Rising");
    });

    expect(result.current.tabActive).toBe("Rising");
  });
});
