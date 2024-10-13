"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { useLangStore } from "@/stores/lang-store"; // Adjust import path as necessary
import { languages, LanguageCode } from "@/constants/lang-constant"; // Adjust import path as necessary

export function LangToggle() {
  const [open, setOpen] = React.useState(false);
  const lang = useLangStore((state) => state.lang); // Get the current language from the store
  const setLang = useLangStore((state) => state.setLang); // Get the setLang function

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" >
          {languages[lang].label}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="p-0 w-[140px]">
        <Command>
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {Object.entries(languages).map(([value, { name }]) => (
                <CommandItem
                  key={value}
                  onSelect={() => {
                    setLang(value as LanguageCode); // Update the selected language in the store
                    setOpen(false); // Close the popover after selection
                  }}
                >
                  <Check
                    className={
                      value === lang
                        ? "mr-2 h-4 w-4 opacity-100"
                        : "mr-2 h-4 w-4 opacity-0"
                    }
                  />
                  {name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
