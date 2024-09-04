<template>
  <q-layout view="hHh LpR lff" :class="{'bg-primary': !$q.dark.isActive}">
    <q-header
      class="q-py-xs"
      :class="{ 'bg-dark': $q.dark.isActive }"
      height-hint="58"
    >
      <WindowAppBar />
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

            <q-menu>
              <div class="q-pa-md">
                <div class="column items-center">
                  <q-avatar size="72px">
                    <q-img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs tw-line-clamp-1">
                    Okigwe Ebube Ireneaus
                  </div>

                  <RouterLink to="/auth">
                    <q-btn label="Logout" push size="sm" v-close-popup />
                  </RouterLink>
                </div>
              </div>
            </q-menu>

            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="{'bg-primary': !$q.dark.isActive}"
      :width="240"

    >
      <q-scroll-area class="fit">
        <q-section>
          <ProfileCard role="parent" />
        </q-section>
        <q-list padding>
          <q-item
            :to="link.href"
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item
            :to="link.href"
            v-for="link in links2"
            :key="link.text"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item
            :to="link.href"
            v-for="link in links3"
            :key="link.text"
            v-ripple
            clickable
            active-class="none"
            exact-active-class="text-accent"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
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
import WindowAppBar from 'src/components/WindowAppBar.vue';
// import { LanguagesTypes } from 'src/types/LanguageTypes';

defineOptions({
  name: 'ParentLayout',
});

const currentLanguage = ref<string>('english');

const leftDrawerOpen = ref(false);
const search = ref('');

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const links1 = [
  { icon: 'home', text: 'Home', href: '/parent/' },
  { icon: 'person', text: 'Profile', href: '/parent/profile' },
  { icon: 'group', text: 'All Teachers', href: '/parent/teachers' },
];
const links2 = [
  { icon: 'payments', text: 'All Expenses', href: '/parent/expenses' },
  { icon: 'quiz', text: 'Exams', href: '/parent/exam' },
];
const links3 = [
  { icon: 'info', text: 'Notice Board', href: '/parent/notice' },
  { icon: 'message', text: 'Message', href: '/parent/message' },
  { icon: 'settings', text: 'Settings', href: '/parent/settings' },
];

const buttons2 = [
  { text: 'Terms' },
  { text: 'Privacy' },
  { text: 'Policy & Safety' },
];
</script>
