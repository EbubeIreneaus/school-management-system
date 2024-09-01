<template>
  <q-layout view="lHh LpR lff" :class="{ 'bg-primary': !$q.dark.isActive }">
    <q-header
      elevated
      class="q-py-xs"
      :class="{ 'bg-dark': $q.dark.isActive }"
      height-hint="58"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          :color="$q.dark.isActive ? 'primary' : 'dark'"
        />

        <div class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-toolbar-title
            shrink
            class="text-weight-bold text-body2"
            :class="{ 'text-dark': !$q.dark.isActive }"
          >
            Welcome Ebube
          </q-toolbar-title>
        </div>

        <q-space />

        <div
          class="YL__toolbar-input-container row no-wrap"
          v-if="$q.screen.gt.sm"
        >
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="col"
            :dark="$q.dark.isActive"
          />
          <q-btn class="YL__toolbar-input-btn" icon="search" unelevated />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn-dropdown
            icon="translate"
            flat
            :label="currentLanguage"
            :color="$q.dark.isActive ? 'primary' : 'dark'"
            v-if="$q.screen.gt.sm"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                v-for="(language, index) in Languages"
                :key="index"
              >
                <q-item-section>
                  <q-item-label
                    class="text-uppercase"
                    @click="() => (currentLanguage = language)"
                    >{{ language }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
            <q-tooltip>language</q-tooltip>
          </q-btn-dropdown>

          <q-btn
            round
            dense
            flat
            :color="$q.dark.isActive ? 'primary' : 'dark'"
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            @click="$q.dark.toggle()"
          >
            <q-tooltip
              >Turn on {{ $q.dark.isActive ? 'light' : 'dark' }} mode</q-tooltip
            >
          </q-btn>

          <q-btn
            round
            dense
            flat
            icon="message"
            :color="$q.dark.isActive ? 'primary' : 'dark'"
          >
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Messages</q-tooltip>
          </q-btn>

          <q-btn
            round
            dense
            flat
            icon="notifications"
            :color="$q.dark.isActive ? 'primary' : 'dark'"
          >
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="{ 'bg-primary': !$q.dark.isActive }"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-section>
          <ProfileCard role="administative" />
        </q-section>
        <q-list padding>
          <!-- Navigation Links 1st section -->
          <q-item
            to="/admin/"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar
              ><q-icon name="home" color="grey"
            /></q-item-section>
            <q-item-section><q-item-label>Home</q-item-label></q-item-section>
          </q-item>

          <q-item
            to="/admin/profile"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar
              ><q-icon name="person" color="grey"
            /></q-item-section>
            <q-item-section
              ><q-item-label>Profile</q-item-label></q-item-section
            >
          </q-item>

          <q-separator class="q-my-md" />
            <q-expansion-item label="Students" icon="school" group="navgroup">
              <q-list class="tw-px-1">
                <q-item
                  to="/admin/student/new"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="person_add" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>New Student</q-item-label></q-item-section
                  >
                </q-item>
                <q-item
                  to="/admin/student/all"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="groups" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>All Student</q-item-label></q-item-section
                  >
                </q-item>
                <q-item
                  to="/admin/student/search"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="engineering" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>Search </q-item-label></q-item-section
                  >
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-expansion-item label="Teachers" icon="fa-solid fa-person-chalkboard" group="navgroup" >
              <q-list class="tw-px-1">
                <q-item
                  to="/admin/teacher/new"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="person_add" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>New Teacher</q-item-label></q-item-section
                  >
                </q-item>
                <q-item
                  to="/admin/teacher/all"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="groups" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>All Teachers</q-item-label></q-item-section
                  >
                </q-item>
                <q-item
                  to="/admin/teacher/search"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="engineering" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>Search </q-item-label></q-item-section
                  >
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-expansion-item label="Parents" icon="supervisor_account" group="navgroup">
              <q-list class="tw-px-1">
                <q-item
                  to="/admin/parent/all"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="diversity_3" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>All Parents</q-item-label></q-item-section
                  >
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-expansion-item label="Staffs" icon="fa-solid fa-user-shield" group="navgroup">
              <q-list class="tw-px-1">
                <q-item
                  to="/admin/staff/new"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="fa-solid fa-user-plus" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>New Staff</q-item-label></q-item-section
                  >
                </q-item>
                <q-item
                  to="/admin/staff/all"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="fa-solid fa-users" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>All Staffs</q-item-label></q-item-section
                  >
                </q-item>
                <q-item
                  to="/admin/staff/search"
                  v-ripple
                  clickable
                  active-class="none"
                  exact-active-class="text-accent"
                >
                  <q-item-section avatar
                    ><q-icon name="fa-solid fa-user-gear" color="grey"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>Search </q-item-label></q-item-section
                  >
                </q-item>
              </q-list>
            </q-expansion-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item
            to="/admin/notice"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar
              ><q-icon name="notifications" color="grey"
            /></q-item-section>
            <q-item-section><q-item-label>Notice & Notiication</q-item-label></q-item-section>
          </q-item>

          <q-item
            to="/admin/message"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar
              ><q-icon name="message" color="grey"
            /></q-item-section>
            <q-item-section><q-item-label>Messages</q-item-label></q-item-section>
          </q-item>

          <q-item
            to="/admin/settings"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar
              ><q-icon name="admin_panel_settings" color="grey"
            /></q-item-section>
            <q-item-section
              ><q-item-label>Settings</q-item-label></q-item-section
            >
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Languages } from 'src/composables/Languages';
import FooterComponent from 'src/components/FooterComponent.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
// import { LanguagesTypes } from 'src/types/LanguageTypes';

defineOptions({
  name: 'AdminLayout',
});

const currentLanguage = ref<string>('english');

const leftDrawerOpen = ref(false);
const search = ref('');

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const buttons2 = [
  { text: 'Terms' },
  { text: 'Privacy' },
  { text: 'Policy & Safety' },
];
</script>
