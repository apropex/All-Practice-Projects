"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

const todoList = [
  { id: "a1x9b2", title: "Buy groceries" },
  { id: "k4m2z8", title: "Finish project" },
  { id: "t7q3n5", title: "Call mom" },
  { id: "p2c6v1", title: "Book appointment" },
  { id: "z9r1w3", title: "Read a book" },
  { id: "b8e4s7", title: "Clean the room" },
  { id: "h3k6l9", title: "Pay bills" },
  { id: "m5u2n0", title: "Workout" },
  { id: "y7v3x6", title: "Reply to emails" },
  { id: "d1q8t4", title: "Plan weekend" },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full cursor-pointer">
            <CalendarIcon />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="border-none p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="h-[400px] mt-4">
        <div className="space-y-2">
          {/* LIST ITEM */}
          {todoList.map(({ title, id }) => (
            <Card className="p-4" key={id}>
              <div className="flex items-center gap-4">
                <Checkbox id={id} />
                <label htmlFor={id} className="text-sm text-muted-foreground">
                  {title}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
