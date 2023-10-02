<template>
    <div>
        <v-dialog v-if="currentTypeState=='default'" v-model="dialogState" >
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            default
            </v-card-title>

            <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="updateShowState(!currentShowState)"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        <v-dialog v-if="currentTypeState=='default2'" v-model="dialogState" >
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            default2
            </v-card-title>

            <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="updateShowState(!currentShowState)"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
 </template>
  
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Getter, Action } from "vuex-class";

    @Component
    export default class DialogView extends Vue {
        @Getter currentShowState!: boolean;
        @Getter currentTypeState!: string;

        @Action updateShowState!: (isShow: boolean) => void;

        mounted() {
         console.log(this.updateShowState);   
        }

        public get dialogState() {
            return this.$store.getters.currentShowState;
        }

        public set dialogState(input: boolean) {
            this.$store.commit("updateShowState", input);
        }
    }
</script>
  