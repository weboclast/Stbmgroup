import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="h1 text-white mb-4">STBM Design System</h1>
          <p className="body-sm text-blue-100 max-w-2xl">
            A comprehensive guide to our typography, colors, components, and spacing system.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Typography Section */}
          <div className="mb-20">
            <h2 className="h2 text-[#1e3a8a] mb-8">Typography System</h2>

            {/* Headings */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Heading Styles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="h1 text-[#1e3a8a] mb-2">.h1 - 4xl/5xl Bold</div>
                  <p className="text-xs text-gray-500">text-4xl sm:text-5xl font-bold tracking-tight leading-tight</p>
                </div>

                <div>
                  <div className="h2 text-[#1e3a8a] mb-2">.h2 - 3xl/4xl Bold</div>
                  <p className="text-xs text-gray-500">text-3xl sm:text-4xl font-bold tracking-tight leading-snug</p>
                </div>

                <div>
                  <div className="h3 text-[#1e3a8a] mb-2">.h3 - 2xl Semibold</div>
                  <p className="text-xs text-gray-500">text-2xl font-semibold tracking-tight leading-snug</p>
                </div>

                <div>
                  <div className="h4 text-[#1e3a8a] mb-2">.h4 - xl Semibold</div>
                  <p className="text-xs text-gray-500">text-xl font-semibold tracking-tight leading-normal</p>
                </div>

                <div>
                  <div className="h5 text-[#1e3a8a] mb-2">.h5 - lg Semibold</div>
                  <p className="text-xs text-gray-500">text-lg font-semibold leading-normal</p>
                </div>

                <div>
                  <div className="h6 text-[#1e3a8a] mb-2">.h6 - base Semibold</div>
                  <p className="text-xs text-gray-500">text-base font-semibold leading-normal</p>
                </div>
              </CardContent>
            </Card>

            {/* Body Text */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Body Text Styles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="body-base text-gray-700 mb-2">
                    .body-base - Base text with relaxed line height
                  </div>
                  <p className="text-xs text-gray-500">text-base leading-relaxed</p>
                </div>

                <div>
                  <div className="body-sm text-gray-600 mb-2">
                    .body-sm - Smaller body text, still readable
                  </div>
                  <p className="text-xs text-gray-500">text-sm leading-relaxed</p>
                </div>

                <div>
                  <div className="body-xs text-gray-500 mb-2">
                    .body-xs - Extra small text for supplementary information
                  </div>
                  <p className="text-xs text-gray-500">text-xs leading-relaxed</p>
                </div>
              </CardContent>
            </Card>

            {/* Form & UI Text */}
            <Card>
              <CardHeader>
                <CardTitle className="h4">Form & UI Text Styles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="label text-foreground mb-2">.label - Form label</div>
                  <p className="text-xs text-gray-500">text-sm font-medium leading-none</p>
                </div>

                <div>
                  <div className="label-sm text-foreground mb-2">.label-sm - Small uppercase label</div>
                  <p className="text-xs text-gray-500">text-xs font-medium uppercase tracking-wider</p>
                </div>

                <div>
                  <div className="caption text-muted-foreground mb-2">.caption - Helper text</div>
                  <p className="text-xs text-gray-500">text-xs font-normal text-muted-foreground</p>
                </div>

                <div>
                  <div className="btn-text text-foreground mb-2">.btn-text - Button text</div>
                  <p className="text-xs text-gray-500">text-sm font-medium</p>
                </div>

                <div>
                  <div className="input-helper text-muted-foreground mb-2">.input-helper - Input helper</div>
                  <p className="text-xs text-gray-500">text-xs font-normal text-muted-foreground</p>
                </div>

                <div>
                  <div className="error-text mb-2">.error-text - Error message</div>
                  <p className="text-xs text-gray-500">text-xs font-medium text-destructive</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colors Section */}
          <div className="mb-20">
            <h2 className="h2 text-[#1e3a8a] mb-8">Color System</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Brand Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#1e3a8a] rounded-lg mx-auto mb-3"></div>
                    <p className="text-xs font-medium text-gray-700">Primary</p>
                    <p className="text-xs text-gray-500">#1e3a8a</p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#FF5757] rounded-lg mx-auto mb-3"></div>
                    <p className="text-xs font-medium text-gray-700">Accent</p>
                    <p className="text-xs text-gray-500">#FF5757</p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#12141d] rounded-lg mx-auto mb-3"></div>
                    <p className="text-xs font-medium text-gray-700">Dark</p>
                    <p className="text-xs text-gray-500">#12141d</p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-3"></div>
                    <p className="text-xs font-medium text-gray-700">White</p>
                    <p className="text-xs text-gray-500">#ffffff</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Semantic Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs font-medium">Success</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs font-medium">Destructive</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs font-medium">Muted</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs font-medium">Info</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs font-medium">Warning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Components Section */}
          <div className="mb-20">
            <h2 className="h2 text-[#1e3a8a] mb-8">Components</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#FF5757] hover:bg-[#E04848]">
                    Primary CTA
                  </Button>
                  <Button variant="outline">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Form Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="label mb-2 block">Form Label</Label>
                  <Input
                    placeholder="Input field"
                    className="input-placeholder"
                  />
                  <p className="input-helper mt-1">This is helper text</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Badges & Labels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Spacing Section */}
          <div className="mb-20">
            <h2 className="h2 text-[#1e3a8a] mb-8">Spacing System</h2>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Margin & Padding Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p className="text-gray-600">
                    <span className="font-semibold">mb-2:</span> margin-bottom 0.5rem (8px)
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">mb-3:</span> margin-bottom 0.75rem (12px)
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">mb-4:</span> margin-bottom 1rem (16px)
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">mb-6:</span> margin-bottom 1.5rem (24px)
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">mb-8:</span> margin-bottom 2rem (32px)
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">mb-12:</span> margin-bottom 3rem (48px)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="h2 text-[#1e3a8a] mb-8">Best Practices</h2>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Usage Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="h5 text-[#1e3a8a] mb-2">✓ Do's</h5>
                  <ul className="space-y-2 text-sm text-gray-600 ml-4">
                    <li>• Use .h1 for page titles</li>
                    <li>• Use .h2 for section headings</li>
                    <li>• Use .h4 or .h5 for subsection titles</li>
                    <li>• Use .body-base for regular paragraph text</li>
                    <li>• Use .label for form labels</li>
                    <li>• Maintain semantic HTML structure (h1, h2, h3 tags)</li>
                  </ul>
                </div>

                <div>
                  <h5 className="h5 text-[#1e3a8a] mb-2">✗ Don'ts</h5>
                  <ul className="space-y-2 text-sm text-gray-600 ml-4">
                    <li>• Don't use raw Tailwind size classes (text-3xl, text-2xl)</li>
                    <li>• Don't mix heading hierarchy (skip h3 after h1)</li>
                    <li>• Don't use heading tags for styling non-heading content</li>
                    <li>• Don't override utility classes without reason</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
