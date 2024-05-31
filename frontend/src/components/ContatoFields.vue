<script setup lang="ts">
// Shadcn-vue
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const props = defineProps<{
  form: FormContext;
}>();

// Entities
import { IContatoEntity } from "@/entities/IContato";

// Services
import { contatosService } from "@/services";

// Vue imports
import { onBeforeMount, ref } from "vue";
import { FormContext } from "vee-validate";

const contatos = ref<IContatoEntity[]>([]);

async function getVeiculos() {
  const res = await contatosService.findMany();

  contatos.value = res;
}
onBeforeMount(async () => {
  await getVeiculos();
});
</script>

<template>
  <div class="space-y-5">
    <FormField v-slot="{ componentField }" name="contatoId">
      <FormField v-slot="{ componentField }" type="radio" name="entrouContato">
        <FormItem>
          <FormLabel>Houve contato passivo?</FormLabel>

          <FormControl>
            <RadioGroup class="flex gap-3" v-bind="componentField">
              <div>
                <FormItem
                  class="flex-1 border rounded-md flex space-y-0 gap-x-3"
                >
                  <FormLabel class="flex w-full font-normal gap-3 p-4">
                    <FormControl>
                      <RadioGroupItem value="sim" />
                    </FormControl>
                    <div class="flex flex-col space-y-1">
                      <span>Sim</span>
                      <span class="text-sm text-muted-foreground"
                        >O cliente entrou em contato</span
                      >
                    </div>
                  </FormLabel>
                </FormItem>
              </div>

              <div>
                <FormItem
                  class="flex-1 border rounded-md flex space-y-0 gap-x-3"
                >
                  <FormLabel class="flex w-full font-normal gap-3 p-4">
                    <FormControl>
                      <RadioGroupItem value="nao" />
                    </FormControl>
                    <div class="flex flex-col space-y-1">
                      <span>Não</span>
                      <span class="text-sm text-muted-foreground"
                        >Contato ainda será feito</span
                      >
                    </div>
                  </FormLabel>
                </FormItem>
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormItem v-show="form.values.entrouContato == 'sim'">
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de contato" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="contato in contatos"
                :value="contato.id.toString()"
              >
                {{ contato.descricao }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>

<style lang=""></style>
