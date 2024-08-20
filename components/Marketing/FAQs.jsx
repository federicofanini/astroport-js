"use client";

import { CheckCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CardIcon } from "./lib/CardUtils";

export function FAQs() {
  return (
    <Card>
      <CardHeader>
        
        <CardTitle className="flex items-center gap-2">
          <CardIcon icon="message-circle" />
          FAQs
        </CardTitle>
        <CardDescription>
          What you want to know about Astroport.
        </CardDescription>
      </CardHeader>
      <div className="p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold text-white">What do I get?</AccordionTrigger>
            <AccordionContent>
            1/ The Astroport with all the boilerplate code you need to run an online business: a payment system, a database, login, UI components, and much more.
            <br />
            2/ The documentation helps you set up your app from scratch, write copy that sells, and ship fast.
            <br />
            3/ Access to our Discord with makers who build fast to stay accountable!
            <br />
            <br />

            <span className="font-semibold text-green-500 flex gap-2 items-center">
              <CheckCheck className="h-4 w-4 "/>
              The repo is available in Javascript (/app router) 
            </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-white">Is it a template?</AccordionTrigger>
            <AccordionContent>
            It&apos;s more than just a template — it&apos;s a <span className="text-indigo-400 font-semibold underline underline-offset-4">toolkit</span>. 
            <br />
            You can easily mix and match sections to build your site fast, including pricing tables, FAQs, and even a complete blog. 
            <br />
            <br />
            Plus, you&apos;ll have access to a variety of UI components like buttons, modals, and popovers.
            <br />
            The Astroport also equips you with essential tools for managing an online business, including payment processing, SEO optimization, and more.
            <br />
            <br />
            <span className="font-semibold text-green-500 flex gap-2 items-center">
              <CheckCheck className="h-4 w-4 "/>
              The repo is available in Javascript (/app router) 
            </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-white">Can I get a refund?</AccordionTrigger>
            <AccordionContent>
            After you&apos;ve got access to the repo, Astroport is yours forever, so it <span className="text-rose-500 font-semibold">can&apos;t</span> be refunded.
            <br />
            <br />
            <span className="font-semibold text-green-500 flex gap-2 items-center">
              <CheckCheck className="h-4 w-4 "/>
              The repo is available in Javascript (/app router) 
            </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
}
