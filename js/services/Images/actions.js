// @flow
import type { Action, ImageFromServer } from 'DoOfflineFirstApps/js/types';

export const IMAGES_GOT = 'IMAGES/GOT';
export const IMAGES_GET_FAILED = 'IMAGES/GET_FAILED';

export const gotImages = (data: Array<ImageFromServer>): Action => ({
    type: IMAGES_GOT,
    payload: data,
});
export const getImagesFailed = (error: Error): Action => ({
    type: IMAGES_GET_FAILED,
    payload: error,
});

export const IMAGES_GOT_NEW = 'IMAGES/GOT_NEW';

export const gotNewImages = (data: Array<ImageFromServer>): Action => ({
    type: IMAGES_GOT_NEW,
    payload: data,
});

export const IMAGES_ADD = 'IMAGES/IMAGES_ADD';
export const IMAGES_ADDED = 'IMAGES/IMAGES_ADDED';
export const IMAGES_ADDITION_FAILED = 'IMAGES/IMAGES_ADDITION_FAILED';
export const createCancelActionType = (uuid: string) => `IMAGES/CANCEL_ADD/${uuid}`;

export const queueImage = (data: ImageToUpload): Action => ({
    type: IMAGES_ADD,
    payload: data,
});
export const addedImage = (data: ImageFromServer): Action => ({
    type: IMAGES_ADDED,
    payload: data,
});
export const addImageFailed = (error: Error, image: ImageToUpload): Action => ({
    type: IMAGES_ADDITION_FAILED,
    payload: error,
    meta: {
        image,
    },
});

export const TOGGLED_LIKE = 'IMAGES/TOGGLED_LIKE';
export const TOGGLE_LIKE_FAILED = 'IMAGES/TOGGLE_LIKE_FAILED';

export const toggledLike = (image: ImageFromServer): Action => ({
    type: TOGGLED_LIKE,
    payload: image,
});
export const toggleLikeFailed = (error: Error): Action => ({
    type: TOGGLE_LIKE_FAILED,
    payload: error,
});
