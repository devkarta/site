"use client";

import { usePathname } from "next/navigation";
import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function Bread() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean); // Split the pathname and remove empty segments

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`; // Construct the href for each breadcrumb item
          return (
            <React.Fragment key={index}>
              {index > 0 && ( // Render separator only if it's not the first item
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              )}
              <BreadcrumbItem>
                {index === paths.length - 1 ? (
                  <BreadcrumbPage>{path}</BreadcrumbPage> // Last item is a page
                ) : (
                  <BreadcrumbLink href={href}>{path}</BreadcrumbLink> // Other items are links
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
