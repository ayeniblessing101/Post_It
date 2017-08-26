import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

/**
 * Add Flash Message.
 * @param {Object} message - groups.
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
 * @param {Object} id - groups.
 * @returns {void} - id.
 */
export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
}
