<script setup lang="ts">
// Shadcn-vue
import {
  FormControl,
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
import { IContatoEntity } from "@/entities/IContato";
import { contatosService } from "@/services";

// Vue imports
import { onBeforeMount, ref } from "vue";

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
  <div>
    <FormField v-slot="{ componentField }" name="contatoId">
      <FormItem>
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
