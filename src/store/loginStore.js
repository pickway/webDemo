// import Vue from 'vue'
// import AppWindow from '@/components/app-window.vue'
import {get, save, remove, LOCAL, SESSION} from '@/utils/storage'

// 登录信息保存到 sessionStorage 的key
const USER_CACHE_KEY = 'USER_INFO'
const USER_TOKEN = 'TOKEN'
const MENU_TITLE = 'COMMON_TITLE'

/**
 * 从sessionStorage获取用户信息
 * @returns {*}
 */
export function getUserFromCache() {
  return get(USER_CACHE_KEY, LOCAL)
}

/**
 * 写入用户信息到 sessionStorage
 * @param {Object} user
 */
export function saveUserToCache(user) {
  save(USER_CACHE_KEY, user, LOCAL)
}

/**
 * 清除sessionStorage用户信息
 * @param {Object} user
 */
export function removeUserToCache(user) {
  remove(USER_CACHE_KEY, LOCAL)
  removeToken()
}

export function saveTokenToLocal(token) {
  save(USER_TOKEN, token, LOCAL)
}

export function getTokenFromLocal() {
  return get(USER_TOKEN, LOCAL)
}

export function saveTokenToSession() {
  const token = getTokenFromLocal()
  save(USER_TOKEN, token, SESSION)
}

export function getTokenFromSession() {
  return get(USER_TOKEN, SESSION)
}

export function removeToken() {
  remove(USER_TOKEN, LOCAL)
  remove(USER_TOKEN, SESSION)
}

export function isDiffentUser() {
  const localToken = getTokenFromLocal()
  const sessionToken = getTokenFromSession()
  return localToken !== sessionToken
}

export function saveMenuTitle(title) {
  return save(MENU_TITLE, title, SESSION)
}

export function getMenuTitle(title) {
  return get(MENU_TITLE, SESSION)
}

export function removeMenuTitle(title) {
  return remove(MENU_TITLE, SESSION)
}

// 去掉字符串前后空格
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
