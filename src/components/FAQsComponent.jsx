import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsComponent() {
  return (
    <Accordion type="single" collapsible className="w-full border-2 border-gray-300 p-4 rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-normal">
          Q. What happens during Freshers &apos; week?
        </AccordionTrigger>
        <AccordionContent  className="text-[#787878] text-lg">
          A: Leverage agile frameworks to provide a robust synopsis for high
          level overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl font-normal">
          Q: What is the transfer application process?
        </AccordionTrigger>
        <AccordionContent  className="text-[#787878] text-lg">
          A: Leverage agile frameworks to provide a robust synopsis for high
          level overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl font-normal">
         Q: Why should I attend community college?
        </AccordionTrigger>
        <AccordionContent className="text-[#787878] text-lg">
          A: Leverage agile frameworks to provide a robust synopsis for high
          level overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
