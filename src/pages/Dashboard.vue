<script setup lang="ts">
import StatCard from '../components/StatCard.vue'
import Button from '../components/Button.vue'
import { useUsers } from '../composables/useUsers'
// composable used to separate user state logic from UI
const { userList, totalUsers, activeUsers, toggleUserStatus } = useUsers()

const dashboard = [
  { title: 'Total Users', value: totalUsers },
  { title: 'Active Users', value: activeUsers },
  { title: 'Revenue', value: 23000 }
]
</script>

<template>
    <div class="container">
        <h1>Admin Dashboard Example</h1>
        <div class="cards">
            <StatCard v-for="dash in dashboard" :key="dash.title" v-bind="dash"/>
        </div>

        <h1>User List Example</h1>
        <table>
            <thead>
                <tr>
                    <th class="table-title">Name</th>
                    <th class="table-title">Status</th>
                    <th class="table-title">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userList" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.status }}</td>
                    <td>
                        <Button 
                        :title="user.status === 'active' ? 'Deactivate' : 'Activate'"
                        @click="toggleUserStatus(user)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
.table-title {
    width: 30%;
}
.container{
    padding:40px;
    font-family:Arial;
}

.cards{
    display:flex;
    gap:20px;
}

.card{
    padding:20px;
    border:1px solid #eee;
    border-radius:8px;
    width:150px;
}
</style>