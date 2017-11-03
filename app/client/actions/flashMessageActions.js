import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

/**
 * Add Flash Message.
 * @param {String} message - groups.
 *
 * @returns {object} - action payload data and action type.
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
 *
 * @returns {object} - action payload data and action type.
 */
export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
}
