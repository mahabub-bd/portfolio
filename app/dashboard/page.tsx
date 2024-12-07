import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <section className="container mx-auto min-h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Admin Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt voluptates distinctio maiores, ipsam totam vero vel neque! Sed natus soluta esse veritatis modi, perspiciatis laboriosam perferendis aperiam temporibus distinctio!
        </CardContent>
      </Card>
    </section>
  );
}
