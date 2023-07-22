import { TabBar } from "@/components/TabBar";
import { useTabBar } from "../../../hooks/useTabBar";
import { fireEvent, render, renderHook } from "@testing-library/react";

describe("TabBar", () => {
  it("should change tabActive when click in Tab", () => {
    const { getByText } = render(<TabBar></TabBar>);

    fireEvent.click(getByText("News"));
    const { result } = renderHook(() => useTabBar());

    expect(result.current.tabActive).toBe("News");
  });
});
