import { fireEvent, render, screen } from "@testing-library/react";
import { Post } from "@/components/Post";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePost } from "../../../hooks/usePost";
import { ReactNode } from "react";
import { mockData, mockDataDefault, mockShowImage } from "./mocks";

jest.mock("../../../hooks/usePost");

const mockUsePost = usePost as jest.MockedFunction<typeof usePost>;

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

beforeEach(() => jest.clearAllMocks());

describe("Post", () => {
  it("should dont call fetchMoreData when hasNextPage is false", () => {
    const mockFetchMoreData = jest.fn();

    mockUsePost.mockImplementation(() => ({
      fetchMoreData: mockFetchMoreData,
      hasNextPage: true,
      isError: false,
      isLoading: false,
      data: mockShowImage,
    }));

    render(<Post></Post>, { wrapper });
    fireEvent.scroll(window, { target: { scrollY: 300 } });

    expect(mockFetchMoreData).toBeCalled();
  });

  it("should call fetchMoreData when hasNextPage is true", () => {
    const mockFetchMoreData = jest.fn();

    mockUsePost.mockImplementation(() => ({
      fetchMoreData: mockFetchMoreData,
      hasNextPage: false,
      isError: false,
      isLoading: false,
      data: mockShowImage,
    }));

    render(<Post></Post>, { wrapper });
    fireEvent.scroll(window, { target: { scrollY: 300 } });

    expect(mockFetchMoreData).not.toBeCalled();
  });

  it("should show post with image when have a thumbnail url", () => {
    mockUsePost.mockImplementation(() => ({
      fetchMoreData: () => {},
      hasNextPage: true,
      isError: false,
      isLoading: false,
      data: mockShowImage,
    }));

    render(<Post></Post>, { wrapper });
    fireEvent.scroll(window, { target: { scrollY: 300 } });

    const post_title = screen.getByText("Titulo teste");

    const post_image = screen.queryByTestId("post-image");

    expect(post_title).toBeInTheDocument();
    expect(post_image).toBeInTheDocument();
  });

  it("should show posts without image when thumbnail is default", () => {
    mockUsePost.mockImplementation(() => ({
      fetchMoreData: () => {},
      hasNextPage: true,
      isError: false,
      isLoading: false,
      data: mockDataDefault,
    }));

    render(<Post></Post>, { wrapper });

    const post_title = screen.getByText("Titulo teste");

    const post_image = screen.queryByTestId("post-image");

    expect(post_title).toBeInTheDocument();
    expect(post_image).not.toBeInTheDocument();
  });

  it("should show posts without image when thumbnail is self", () => {
    mockUsePost.mockImplementation(() => ({
      fetchMoreData: () => {},
      hasNextPage: false,
      isError: false,
      isLoading: false,
      data: mockData,
    }));

    render(<Post></Post>, { wrapper });

    const post_title = screen.getByText("Titulo teste");

    const post_image = screen.queryByTestId("post-image");

    expect(post_title).toBeInTheDocument();
    expect(post_image).not.toBeInTheDocument();
  });

  it("should show empty state message when dont have data", () => {
    mockUsePost.mockImplementation(() => ({
      fetchMoreData: () => {},
      hasNextPage: false,
      isError: false,
      isLoading: false,
      data: undefined,
    }));

    render(<Post></Post>, { wrapper });

    const empty_message = screen.getByText(
      "Parece que não foi encontrado posts.",
    );

    expect(empty_message).toBeInTheDocument();
  });

  it("should show loading state when isLoading is true", () => {
    mockUsePost.mockImplementation(() => ({
      fetchMoreData: () => {},
      hasNextPage: false,
      isError: false,
      isLoading: true,
      data: undefined,
    }));

    render(<Post></Post>, { wrapper });

    const loading = screen.getAllByTestId("loading-test");

    expect(loading[0]).toBeInTheDocument();
  });

  it("should show error message when response has erro", () => {
    mockUsePost.mockImplementation(() => ({
      fetchMoreData: () => {},
      hasNextPage: true,
      isError: true,
      isLoading: false,
      data: undefined,
    }));

    render(<Post></Post>, { wrapper });

    const message = screen.getByText(
      "Aconteceu um erro, tente novamente em alguns minutos...",
    );
    expect(message).toBeInTheDocument();
  });
});
