import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

export function ProductSpecs({ product }: { product: Product }) {
  return (
    <Tabs defaultValue="descripcion" className="w-full">
      <TabsList>
        <TabsTrigger value="descripcion">Descripción</TabsTrigger>
        <TabsTrigger value="specs">Especificaciones</TabsTrigger>
        <TabsTrigger value="compatibilidad">Compatibilidad</TabsTrigger>
      </TabsList>

      <TabsContent value="descripcion" className="text-sm text-muted-foreground">
        {product.description}
      </TabsContent>

      <TabsContent value="specs">
        <dl className="divide-y divide-border">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center justify-between py-2 text-sm"
            >
              <dt className="text-muted-foreground">{spec.label}</dt>
              <dd className="font-medium">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </TabsContent>

      <TabsContent value="compatibilidad">
        <div className="flex flex-wrap gap-2">
          {product.compatibleWith.map((model) => (
            <Badge key={model} variant="secondary">
              {model}
            </Badge>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
