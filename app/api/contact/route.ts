import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, company, email, stage, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Apex Compensation <onboarding@resend.dev>",
      to: "saxtonparcher@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2D1B69, #0F1B4C); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New inquiry from your website</h1>
          </div>
          <div style="background: #F8F9FB; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E5E7EB; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; color: #0F1B4C; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; color: #0F1B4C; font-weight: 600;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #D946EF;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">Stage</td>
                <td style="padding: 10px 0; color: #0F1B4C; font-weight: 600;">${stage || "—"}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
            <p style="color: #64748B; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #0F1B4C; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
            <div style="margin-top: 28px;">
              <a href="mailto:${email}" style="background: linear-gradient(135deg, #FF6B6B, #D946EF); color: white; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send. Please email directly." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
