import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../redux-toolkit/store";
const api = `${process.env.PUBLIC_URL}/api`;
export const TaskApi = `${api}/task.json`;
export const BookmarkApi = `${api}/bookmark.json`;
export const ChartistApi = `${api}/chartistData.json`;
export const ChartjsApi = `${api}/chartjsData.json`;
export const ChatMemberApi = `${api}/chatMember.json`;
export const ChatApi = `${api}/chats.json`;
export const ContactApi = `${api}/contacts.json`;
export const ProductsApi = `${api}/product.json`;
export const EmailApi = `${api}/email.json`;
export const ImageLightApi = `${api}/image-light.json`;
export const BigImageApi = `${api}/image-big-light.json`;
export const MasonryApi = `${api}/masonry.json`;
export const AllProjectApi = `${api}/allProject.json`;
export const SearchAllTabsApi = `${api}/searchAllTabs.json`;
export const TableDataApi = `${api}/tableData.json`;
export const TodoApi = `${api}/todo.json`;
export const JobSearchApi = `${api}/jobSearch.json`;
export const LearningApi = `${api}/learning.json`;
export const KnowledgebaseApi = `${api}/knowledgebaseDB.json`;
export const FaqApi = `${api}/Faq.json`;
export const FileApi = `${api}/files.json`;
export const UserCardApi = `${api}/usercard.json`;
export const StickyApi = `${api}/sticky.json`;
export const TypeaheadDataApi = `${api}/typeaheadData.json`;
export const FeatherDataApi = `${api}/featherData.json`;
export const FlagIconDataApi = `${api}/flagIconData.json`;
export const FontawsomeDataApi = `${api}/fontawsomeData.json`;
export const IcoDataApi = `${api}/icoData.json`;
export const ThemifyDataApi = `${api}/themifyData.json`;
export const fetchBookmaekApi = `${api}/bookmark.json`;
export const GooglechartApi = `${api}/googleChartData.json`;

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://afgog-api.onrender.com/api/",
  baseUrl: "http://localhost:4001/api/",
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).user;
    // console.log("token", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      // headers.set("Content-Type", "multipart/form-data");
    }
    return headers;
  },
});

export const apis = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["getBanner"],
  endpoints: () => ({}),
});
