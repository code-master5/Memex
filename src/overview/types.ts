import { Annotation } from 'src/sidebar-overlay/sidebar/types'
import { PageUrlsByDay } from 'src/search/background/types'
import { SocialPage } from 'src/social-integration/types'

export interface Result extends SocialPage {
    url: string
    title: string
    tags: string[]
    hasBookmark: boolean
    isDeleting: boolean
    tagPillsData: string[]
    shouldDisplayTagPopup: boolean
    displayTime: number
    screenshot: string
    favIcon: string
    annotsCount: number
    annotations: Annotation[]
    pageId: string
}

export interface ResultWithIndex extends Result {
    index: number
}

export type ResultsByUrl = Map<string, ResultWithIndex>

export interface SearchResult {
    totalCount: number
    resultsExhausted: boolean
    isBadTerm: boolean
    isInvalidSearch: boolean
    docs: Result[]
    isAnnotsSearch: boolean
    annotsByDay?: PageUrlsByDay
}

export interface Tooltip {
    title: string
    description: string
}
