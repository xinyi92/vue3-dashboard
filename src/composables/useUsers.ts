import { ref, computed } from 'vue'
import { users } from '../data/users'
import type { User } from '../types/user'

export function useUsers() {
  const userList = ref(users)

  const totalUsers = computed(() => userList.value.length)

  const activeUsers = computed(() => {
    return userList.value.filter(u => u.status === 'active').length
  })

  const toggleUserStatus = (user: User) => {
    user.status = user.status === 'inactive' ? 'active' : 'inactive'
  }

  return {
    userList,
    totalUsers,
    activeUsers,
    toggleUserStatus
  }
}