
export function sidebarSecOpen() {
  return {
    type: 'SIDEBAR_SEC_OPEN',
    payload: true
  }
}

export function sidebarSecClose() {
  return {
    type: 'SIDEBAR_SEC_CLOSE',
    payload: false
  }
}

export function sidebarFirstOpen() {
  return {
    type: 'SIDEBAR_FIRST_OPEN',
    payload: true
  }
}

export function sidebarFirstClose() {
  return {
    type: 'SIDEBAR_FIRST_CLOSE',
    payload: false
  }
}
