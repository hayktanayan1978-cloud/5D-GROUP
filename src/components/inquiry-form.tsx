import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="rounded-lg border border-teal/30 bg-teal/10 p-8"><h3 className="text-xl font-semibold">Inquiry prepared</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Thank you. Email 5dgrouppharma@gmail.com to submit your inquiry while direct form delivery is being connected.</p><Button className="mt-5" variant="outline" onClick={() => setSent(false)}>Send another inquiry</Button></div>;
  return <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="grid gap-4 rounded-lg border bg-card p-6 shadow-sm sm:grid-cols-2"><Input required aria-label="Name" placeholder="Name" /><Input required aria-label="Company" placeholder="Company" /><Input required aria-label="Country" placeholder="Country" /><Input required type="email" aria-label="Email" placeholder="Business email" /><Input type="tel" aria-label="Phone" placeholder="Phone" /><Input aria-label="Interested product" placeholder="Interested product" defaultValue={initialProduct} /><Textarea required aria-label="Message" placeholder="Tell us about your distribution or product inquiry" className="min-h-32 sm:col-span-2" /><div className="sm:col-span-2"><Button type="submit" size="lg">Send Inquiry <Send /></Button><p className="mt-3 text-xs text-muted-foreground">This preview does not yet send or store form submissions.</p></div></form>;
}