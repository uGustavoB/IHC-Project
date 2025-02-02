"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ptBR } from "date-fns/locale"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
import { IoIosHelpCircleOutline } from "react-icons/io";

// Horários disponíveis para reserva
const timeSlots = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]

// Número de pessoas permitido
const peopleOptions = Array.from({ length: 6 }, (_, i) => i + 1)

export default function ReservasPage() {
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [people, setPeople] = useState()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!date || !time || !people || !name || !email || !phone) {
      toast.error("Preencha todos os campos para solicitar a reserva")
      return
    }

    // Aqui você adicionaria a lógica para enviar a reserva
    toast.success("Reserva solicitada com sucesso! Confira seu e-mail para mais informações.")

    // Limpar formulário
    setDate(undefined)
    setTime(undefined)
    setPeople(undefined)
    setName("")
    setEmail("")
    setPhone("")
  }

  return (
    <main className="container mx-auto px-4 py-8" id="reservas">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 underline decoration-2">Reservas</h1>
          <p className="text-muted-foreground">Faça sua reserva online de forma rápida e prática. Garanta seu lugar e aproveite uma experiência gastronômica inesquecível.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Calendário e Informações */}
          <Card>
            <CardHeader>
              <CardTitle>Selecione a Data</CardTitle>
              <CardDescription>Escolha a data desejada para sua reserva</CardDescription>
            </CardHeader>
            <CardContent>
              <LocalizationProvider dateAdapter={AdapterDayjs} locale={ptBR}>
                <DateCalendar
                  date={date}
                  onChange={setDate}
                  disablePast
                  renderInput={(props) => <Input {...props} placeholder="Selecione a data" />}
                  className="rounded-md "
                />
              </LocalizationProvider>
            </CardContent>
          </Card>

          {/* Formulário */}
          <Card>
            <CardHeader>
              <CardTitle>Detalhes da Reserva</CardTitle>
              <CardDescription>Preencha as informações para sua reserva</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="time">Horário</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="people">Pessoas</Label>
                    <Select value={people} onValueChange={setPeople}>
                      <SelectTrigger id="people">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {peopleOptions.map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "pessoa" : "pessoas"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="email">E-mail</Label>
                    <IoIosHelpCircleOutline 
                      className="text-muted-foreground ml-1 cursor-pointer text-lg my-anchor-element"
                    />
                    <Tooltip
                    anchorSelect=".my-anchor-element"
                    place="top"
                    className="dark:bg-foreground dark:text-background"
                    >
                      Seu e-mail será utilizado para confirmar a reserva.
                    </Tooltip>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Solicitar Reserva
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Limite de Pessoas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reservas para grupos superiores a 6 pessoas devem ser confirmadas com antecedência e estão sujeitas à disponibilidade de mesas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Política de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reservas devem ser feitas com no mínimo 2 horas de antecedência. Tolerância de 15 minutos de atraso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Política de Cancelamento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cancelamentos devem ser feitos com pelo menos 1 hora de antecedência. Reservas não canceladas podem resultar em restrições futuras.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </main>
  )
}