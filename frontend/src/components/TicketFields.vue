<script setup lang="ts">
// Icons

// Labels
import { tipoTicketLabel } from "@/utils/labels";

// Shadcn-vue
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import FormLabel from "@/components/ui/form/FormLabel.vue";
import FormDescription from "@/components/ui/form/FormDescription.vue";

// Entities
import { IVeiculoEntity } from "@/entities/IVeiculo";

// Services
import { veiculosService } from "@/services";

// Vue imports
import { onBeforeMount, ref } from "vue";

const veiculos = ref<IVeiculoEntity[]>([]);

async function getVeiculos() {
  const res = await veiculosService.findMany();

  veiculos.value = res;
}
onBeforeMount(async () => {
  await getVeiculos();
});
</script>

<template>
  <div class="space-y-5">
    <FormField v-slot="{ componentField }" type="radio" name="tipo">
      <FormItem>
        <FormLabel> Qual o intuito desse ticket? </FormLabel>
        <FormDescription>Sub título</FormDescription>

        <FormControl>
          <RadioGroup
            class="grid grid-cols-2 space-y-1"
            v-bind="componentField"
          >
            <FormItem
              v-for="item in Object.entries(tipoTicketLabel)"
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

    <FormField v-slot="{ componentField }" name="veiculoId">
      <FormItem>
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Veículo(s)" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="veiculo in veiculos"
                :value="veiculo.id.toString()"
              >
                {{ veiculo.identificador }}
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
