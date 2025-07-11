/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module holds the global context of the Website.
 *
 * The context is meant to be shared among all visulization tools.
 */

import { createContext } from "react";

import { apiRootToHostname } from "../utils/url_utils";
import { PLACE_TYPES } from "./constants";

// Global app state
export interface ContextType {
  statVarHierarchyType: string;
  svPath?: Record<string, string[]>;
  togglePath?: (statVar: string, path?: string[]) => void;
}

export const Context = createContext({} as ContextType);

export interface ExploreType {
  exploreMore: Record<string, Record<string, string[]>>;
  place: string;
  placeType: string;
}

export const ExploreContext = createContext({} as ExploreType);

export const RankingUnitUrlFuncContext = createContext(
  (dcid: string, placeType?: string, apiRoot?: string, statVar?: string) => {
    const path =
      !placeType || PLACE_TYPES.has(placeType)
        ? `/place/${dcid}`
        : `/browser/${dcid}`;
    return `${apiRootToHostname(apiRoot)}${path}`;
  }
);

export const SdgContext = createContext({
  sdgIndex: null,
  /* eslint-disable */
  setSdgIndex: (_: number): void => {
    return;
  },
  /* eslint-enable */
});
