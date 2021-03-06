import axios from 'axios';
import { Response } from '../../api-types';

export type FetchProjectResponse = Response.Project.Fetch;

export async function fetchProject(): Promise<Response.Project.Fetch> {
  const url = `/datastore_viewer/api/projects`;
  const { data } = await axios.get<FetchProjectResponse>(url);
  return data;
}
