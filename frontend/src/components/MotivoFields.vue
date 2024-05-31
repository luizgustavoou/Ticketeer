<script setup lang="ts">
// Icons
import { Search } from "lucide-vue-next";

// Shadcn-vue components
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
import { onBeforeMount, ref } from "vue";
import { IMotivoEntity } from "@/entities/ITicket";
import { motivosService } from "@/services";

const motivos = ref<IMotivoEntity[]>([]);

async function getMotivos() {
  const res = await motivosService.findMany();

  motivos.value = res;
}
onBeforeMount(async () => {
  await getMotivos();
});
</script>

<template>
  <div>
    <FormField v-slot="{ componentField }" type="radio" name="motivoId">
      <FormItem>
        <FormLabel> Qual o motivo desse ticket? </FormLabel>
        <FormDescription>Sub título</FormDescription>

        <div
          class="flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-primary ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        >
          <Search className="h-[16px] w-[16px]" />
          <input
            type="search"
            className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <FormControl>
          <RadioGroup
            class="flex flex-col space-y-1 bg-[#F1F5F9] p-2"
            v-bind="componentField"
          >
            <FormItem
              v-for="motivo in motivos"
              class="flex items-center space-y-0 gap-x-3"
            >
              <FormControl>
                <RadioGroupItem :value="motivo.id.toString()" />
              </FormControl>
              <FormLabel class="font-normal">
                {{ motivo.descricao }}
              </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="descricao">
      <FormItem>
        <FormDescription>
          <p class="text-primary font-bold">
            Prazo estimado:
            <span>06/04/2024</span>
          </p>
          <p>
            Informe o cliente que a resolução deste motivo está prevista em 3
            dias úteis.
          </p>
        </FormDescription>
        <FormControl>
          <Textarea
            class="resize-none"
            placeholder="Informe mais detalhes sobre o ticket"
            v-bind="componentField"
            autocomplete="descricao"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>

<style lang=""></style>
