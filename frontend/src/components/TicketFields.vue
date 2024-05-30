<script setup lang="ts">
// Icons
import { Search } from "lucide-vue-next";

import { experienceStateLabel } from "../utils/labels";

// Shadcn-vue
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Entities
import Textarea from "@/components/ui/textarea/Textarea.vue";
import FormLabel from "@/components/ui/form/FormLabel.vue";
import FormDescription from "@/components/ui/form/FormDescription.vue";
</script>

<template>
  <div>
    <FormField v-slot="{ componentField }" type="radio" name="tipo">
      <FormItem>
        <FormLabel> Qual o motivo desse ticket? </FormLabel>
        <FormDescription>Sub título</FormDescription>

        <FormControl>
          <RadioGroup
            class="grid grid-cols-2  space-y-1"
            v-bind="componentField"
          >
            <FormItem
              v-for="item in Object.entries(experienceStateLabel)"
              class="flex items-center space-y-0 gap-x-3"
            >
              <FormControl>
                <RadioGroupItem :value="item[0]" />
              </FormControl>
              <FormLabel class="font-normal"> {{ item[1] }} </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>

<style lang=""></style>
