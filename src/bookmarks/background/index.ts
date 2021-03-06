import Storex from '@worldbrain/storex'

import BookmarksStorage from './storage'
import { makeRemotelyCallable } from 'src/util/webextensionRPC'
import normalizeUrl from 'src/util/encode-url-for-id'

export default class BookmarksBackground {
    storage: BookmarksStorage

    constructor({ storageManager }: { storageManager: Storex }) {
        this.storage = new BookmarksStorage({ storageManager })
    }

    setupRemoteFunctions() {
        makeRemotelyCallable({
            addBookmark: this.addBookmark.bind(this),
            delBookmark: this.delBookmark.bind(this),
        })
    }

    async addBookmark({ url }: { url: string }) {
        return this.storage.addBookmark({ url: normalizeUrl(url) })
    }

    async delBookmark({ url }: { url: string }) {
        return this.storage.delBookmark({ url: normalizeUrl(url) })
    }
}
