import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card className="flex items-center gap-3 p-3">
      <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
        {/* Banner - Esquerda */}
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      {/* Texto - Direita */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">{service.name}</h3>
        <p className="text-sm text-gray-400">{service.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-primary">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(service.price))}
          </p>
          <Button variant={"secondary"} size={"sm"}>
            Reservar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ServiceItem
