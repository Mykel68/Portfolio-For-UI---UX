import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import User from "@/data/User"

export default function Services() {


    return (
        <section className="container px-4 mx-auto py-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground text-balance">
                    {User.subtitle.service_subtitle}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {User.service.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}