import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

/**
 * Add Flash Message.
 * @param {String} message - groups.
 * @returns {void} - .
 */
export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
}

/**
 * Deletes flash message.
 * @param {Integer} id - FlashMessage Id.
 * @returns {void} - id.
 */
export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
}
