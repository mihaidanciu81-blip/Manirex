import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Loader2, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import SEO from '@/components/SEO';

const rfqSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(5, "Contact phone is required"),
  country: z.string().min(2, "Please select a country"),
  productCategory: z.string().min(1, "Please select a category"),
  annualVolume: z.string().min(1, "Please select volume"),
  message: z.string().optional(),
  gdpr: z.boolean().refine(val => val === true, "You must accept the privacy policy")
});

type RFQFormValues = z.infer<typeof rfqSchema>;

export default function RequestQuote() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<RFQFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      productCategory: "",
      annualVolume: "",
      message: "",
      gdpr: false
    }
  });

  async function onSubmit(values: RFQFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("RFQ Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <SEO 
        title="Request a Quote" 
        description="Get a technical quote for custom industrial woven bags, FIBCs, or BOPP packaging. Our engineering team responds within 4 business hours."
      />

      <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Request A Technical Quote</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Provide your project specifications and our engineering team will provide a tailored quote and logistics estimate.
             </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 -mt-16 lg:-mt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 lg:p-12 shadow-xl rounded-sm border-t-8 border-[#F97316]"
            >
              {isSuccess ? (
                <div className="text-center py-20 space-y-6">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                     <CheckCircle2 size={40} />
                   </div>
                   <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Request Sent Successfully</h2>
                   <p className="text-slate-500 max-w-md mx-auto">
                     Thank you for your inquiry. A technical account manager will review your specs and contact you within 4 business hours.
                   </p>
                   <Button onClick={() => setIsSuccess(false)} variant="outline">Send Another Request</Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="rounded-none border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Industrial Corp Ltd" className="rounded-none border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Work Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@company.com" className="rounded-none border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+40 700 000 000" className="rounded-none border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Country *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-none border-slate-200">
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ro">Romania</SelectItem>
                                <SelectItem value="de">Germany</SelectItem>
                                <SelectItem value="fr">France</SelectItem>
                                <SelectItem value="it">Italy</SelectItem>
                                <SelectItem value="other">Other EU / International</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                         control={form.control}
                         name="productCategory"
                         render={({ field }) => (
                           <FormItem>
                             <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Product Category *</FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                               <FormControl>
                                 <SelectTrigger className="rounded-none border-slate-200">
                                   <SelectValue placeholder="Select category" />
                                 </SelectTrigger>
                               </FormControl>
                               <SelectContent>
                                 <SelectItem value="pp-woven">PP Woven Sacks</SelectItem>
                                 <SelectItem value="fibc">FIBC (Big Bags)</SelectItem>
                                 <SelectItem value="bopp">BOPP Laminated</SelectItem>
                                 <SelectItem value="leno">Leno Mesh</SelectItem>
                                 <SelectItem value="jute">Jute Bags</SelectItem>
                               </SelectContent>
                             </Select>
                             <FormMessage />
                           </FormItem>
                         )}
                       />
                    </div>

                    <FormField
                      control={form.control}
                      name="annualVolume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Estimated Annual Volume *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none border-slate-200">
                                <SelectValue placeholder="Select quantity bracket" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">Under 100k units</SelectItem>
                              <SelectItem value="medium">100k - 500k units</SelectItem>
                              <SelectItem value="large">500k - 1M units</SelectItem>
                              <SelectItem value="enterprise">1M+ units</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold tracking-widest text-xs text-slate-500">Technical Requirements / Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe GSM, size, printing needs, or special closures..." 
                              className="rounded-none border-slate-200 min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gdpr"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-slate-50">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-xs text-slate-600">
                              I agree to the processing of my personal data for the purpose of receiving an industrial quote. See our Privacy Policy for details.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#F97316] hover:bg-[#EA580C] text-white font-black uppercase tracking-widest text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send RFQ Request <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#0B3D91] tracking-tight uppercase italic">What Happens Next?</h3>
                <div className="space-y-4">
                   <Step number="01" title="Initial Review" description="Our engineering team reviews your technical specs for manufacturability." />
                   <Step number="02" title="Price Calculation" description="We calculate the most efficient production run based on your volume." />
                   <Step number="03" title="Logistics Quote" description="A formal proposal including lead times and delivery to your site." />
                </div>
             </div>

             <div className="bg-[#0B3D91] p-8 text-white space-y-6 rounded-sm">
                <h3 className="text-xl font-bold uppercase tracking-tight italic border-b border-white/20 pb-4">Contact Info</h3>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-sm"><Phone size={20} className="text-orange-400" /></div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Phone Support</div>
                        <div className="font-bold">+40 700 000 000</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-sm"><Mail size={20} className="text-orange-400" /></div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Email Inquiries</div>
                        <div className="font-bold">sales@industrialsacks.com</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-sm"><MapPin size={20} className="text-orange-400" /></div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Main Plant</div>
                        <p className="text-sm font-medium">Bulevardul Industrial 44, <br />Bucharest, Romania</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <span className="text-3xl font-black text-[#F97316] opacity-30 leading-none">{number}</span>
      <div className="space-y-1">
        <h4 className="font-bold text-slate-900 leading-tight uppercase tracking-tight italic">{title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
