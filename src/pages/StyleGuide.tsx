import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-5 to-primary-6 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="h1 text-white mb-4">STBM Design System</h1>
          <p className="body-sm text-neutral-1 max-w-2xl">
            A comprehensive guide to our typography, colors, components, and spacing system.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Typography Section */}
          <div className="mb-20">
            <h2 className="h2 text-neutral-10 mb-8">Typography System</h2>

            {/* Headings */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Heading Styles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="h1 text-neutral-10 mb-2">.h1 - 4xl/5xl Bold</div>
                  <p className="text-xs text-gray-500">text-4xl sm:text-5xl font-bold tracking-tight leading-tight</p>
                </div>

                <div>
                  <div className="h2 text-neutral-10 mb-2">.h2 - 3xl/4xl Bold</div>
                  <p className="text-xs text-gray-500">text-3xl sm:text-4xl font-bold tracking-tight leading-snug</p>
                </div>

                <div>
                  <div className="h3 text-neutral-10 mb-2">.h3 - 2xl Semibold</div>
                  <p className="text-xs text-gray-500">text-2xl font-semibold tracking-tight leading-snug</p>
                </div>

                <div>
                  <div className="h4 text-neutral-10 mb-2">.h4 - xl Semibold</div>
                  <p className="text-xs text-gray-500">text-xl font-semibold tracking-tight leading-normal</p>
                </div>

                <div>
                  <div className="h5 text-neutral-10 mb-2">.h5 - lg Semibold</div>
                  <p className="text-xs text-gray-500">text-lg font-semibold leading-normal</p>
                </div>

                <div>
                  <div className="h6 text-neutral-10 mb-2">.h6 - base Semibold</div>
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
                  {/* Grid System Section */}
                  <div className="mb-20">
                    <h2 className="h2 text-neutral-10 mb-8">Grid System</h2>

                    <Card className="mb-8">
                      <CardHeader>
                        <CardTitle className="h4">12-Column Grid (visual)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          A 12-column baseline gives flexible control for common layouts (12 = 1,2,3,4,6,12 divisions).
                        </p>

                        <div className="grid grid-cols-12 gap-2 mb-6 p-4 bg-gray-50 rounded-lg">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div
                              key={i}
                              className="col-span-1 bg-neutral-10 text-white text-xs font-semibold py-2 text-center rounded"
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>

                        <p className="text-xs text-gray-500 mb-2">
                          Base: <code className="bg-gray-100 px-1 rounded">grid grid-cols-12 gap-4</code>
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="mb-8">
                      <CardHeader>
                        <CardTitle className="h4">Column Span Examples</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-12 bg-blue-100 p-2 rounded text-center text-xs">col-span-12</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-6 bg-blue-100 p-2 rounded text-center text-xs">col-span-6</div>
                            <div className="col-span-6 bg-blue-100 p-2 rounded text-center text-xs">col-span-6</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">col-span-4</div>
                            <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">col-span-4</div>
                            <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">col-span-4</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">col-span-3</div>
                            <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">col-span-3</div>
                            <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">col-span-3</div>
                            <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">col-span-3</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="h4">Responsive Patterns</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <h5 className="h5 text-neutral-10 mb-3">3-Column Responsive</h5>
                          <p className="text-xs text-gray-600 mb-3">Mobile → 2 cols (md) → 3 cols (lg)</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                            {Array.from({ length: 6 }).map((_, i) => (
                              <div key={i} className="bg-blue-100 p-4 rounded text-center text-xs h-24 flex items-center justify-center">
                                Item {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6">
                          <h5 className="h5 text-neutral-10 mb-3">6-Column (using 12-col baseline)</h5>
                          <p className="text-xs text-gray-600 mb-3">Mobile: full width; Small: 2 per row; Medium: 4 per row (12-col grid with col-span)</p>
                          <div className="grid grid-cols-12 gap-4 mb-3">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <div key={i} className="col-span-12 sm:col-span-6 md:col-span-3 bg-orange-100 p-4 rounded text-center text-xs h-24 flex items-center justify-center">
                                Item {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6">
                          <h5 className="h5 text-neutral-10 mb-3">Sidebar Layout (8 + 4)</h5>
                          <div className="grid grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 md:col-span-8 bg-purple-100 p-4 rounded text-center h-32 flex items-center justify-center text-xs">Main (md:8)</div>
                            <div className="col-span-12 md:col-span-4 bg-purple-100 p-4 rounded text-center h-32 flex items-center justify-center text-xs">Sidebar (md:4)</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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

          {/* Color System Section */}
          <div className="mb-20">
            <h2 className="h2 text-neutral-10 mb-8">Color System</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Primary Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                    const colors = ['#ffffff', '#ffe1de', '#ffc7c3', '#ff9c95', '#ff5757', '#fa002d', '#e7000f', '#c2000a', '#a0000f', '#840114', '#480006'];
                    return (
                      <div key={i} className="text-center">
                        <div className={`w-16 h-16 rounded-lg mx-auto mb-2 ${i === 0 ? 'border-2 border-gray-300' : ''}`} style={{backgroundColor: colors[i]}}></div>
                        <p className="text-xs font-medium text-gray-700">--{i}</p>
                        <p className="text-xs text-gray-500">{colors[i]}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Secondary Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                    const colors = ['#ffffff', '#d5ffe9', '#acffd4', '#57ffb7', '#00ec90', '#00d479', '#00af62', '#008a4e', '#006d3f', '#005936', '#00321c'];
                    return (
                      <div key={i} className="text-center">
                        <div className={`w-16 h-16 rounded-lg mx-auto mb-2 ${i === 0 ? 'border-2 border-gray-300' : ''}`} style={{backgroundColor: colors[i]}}></div>
                        <p className="text-xs font-medium text-gray-700">--{i}</p>
                        <p className="text-xs text-gray-500">{colors[i]}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Neutral Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                    const colors = ['#ffffff', '#f3f5f7', '#e4e5e7', '#d3d4d6', '#9fa1a3', '#727375', '#515254', '#3f4041', '#252628', '#161718', '#090a0b'];
                    return (
                      <div key={i} className="text-center">
                        <div className={`w-16 h-16 rounded-lg mx-auto mb-2 border border-gray-300 ${i === 0 ? 'border-2 border-gray-400' : ''}`} style={{backgroundColor: colors[i]}}></div>
                        <p className="text-xs font-medium text-gray-700">--{i}</p>
                        <p className="text-xs text-gray-500">{colors[i]}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid System Section */}
          <div className="mb-20">
            <h2 className="h2 text-neutral-10 mb-8">Grid System</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">12-Column Grid System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    Our design system uses Tailwind's 12-column grid system. Build responsive layouts with simple, semantic class names.
                  </p>
                  
                  {/* Visual 12-Column Grid */}
                  <div className="grid grid-cols-12 gap-2 mb-6 p-4 bg-gray-50 rounded-lg">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="col-span-1 bg-primary-5 text-white text-xs font-semibold py-2 text-center rounded"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 mb-4">
                    Base structure: <code className="bg-gray-100 px-1 rounded">grid grid-cols-12 gap-4</code>
                  </p>
                </div>

                {/* Column Span Classes */}
                <div>
                  <h5 className="h5 text-neutral-10 mb-4">Column Span Examples</h5>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-12 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-12</code> - Full width
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-6 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-6</code>
                      </div>
                      <div className="col-span-6 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-6</code>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-4</code>
                      </div>
                      <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-4</code>
                      </div>
                      <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-4</code>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-3</code>
                      </div>
                      <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-3</code>
                      </div>
                      <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-3</code>
                      </div>
                      <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-3</code>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-8 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-8</code>
                      </div>
                      <div className="col-span-4 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-4</code>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-9 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-9</code>
                      </div>
                      <div className="col-span-3 bg-blue-100 p-2 rounded text-center text-xs">
                        <code>col-span-3</code>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="h4">Responsive Grid Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h5 className="h5 text-neutral-10 mb-3">Breakpoint Prefixes</h5>
                  <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                    <p><code className="bg-white px-1 rounded">col-span-*</code> - Default (mobile)</p>
                    <p><code className="bg-white px-1 rounded">sm:col-span-*</code> - Small screens (≥640px)</p>
                    <p><code className="bg-white px-1 rounded">md:col-span-*</code> - Medium screens (≥768px)</p>
                    <p><code className="bg-white px-1 rounded">lg:col-span-*</code> - Large screens (≥1024px)</p>
                    <p><code className="bg-white px-1 rounded">xl:col-span-*</code> - Extra large screens (≥1280px)</p>
                    <p><code className="bg-white px-1 rounded">2xl:col-span-*</code> - 2X large screens (≥1536px)</p>
                  </div>
                </div>

                <div>
                  <h5 className="h5 text-neutral-10 mb-3 mt-6">Pattern: 3-Column Responsive</h5>
                  <p className="text-xs text-gray-600 mb-3">Full width on mobile → 2 columns on tablet → 3 columns on desktop</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="bg-blue-100 p-4 rounded text-center text-xs h-24 flex items-center justify-center">
                        Item {i + 1}
                      </div>
                    ))}
                  </div>
                  <code className="bg-gray-100 px-2 py-1 rounded block text-xs mb-3">
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  </code>
                </div>

                <div>
                  <h5 className="h5 text-neutral-10 mb-3 mt-6">Pattern: 6-Column Responsive</h5>
                  <p className="text-xs text-gray-600 mb-3">Full width on mobile → 2 columns on tablet → 4 columns on desktop (using 12-column grid)</p>
                  <div className="grid grid-cols-12 gap-4 mb-3">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="col-span-12 sm:col-span-6 md:col-span-3 bg-orange-100 p-4 rounded text-center text-xs h-24 flex items-center justify-center">
                        Item {i + 1}
                      </div>
                    ))}
                  </div>
                  <code className="bg-gray-100 px-2 py-1 rounded block text-xs mb-3">
                    className="grid grid-cols-12 gap-4"<br/>
                    &lt;div className="col-span-12 sm:col-span-6 md:col-span-3"&gt;...&lt;/div&gt;
                  </code>
                  <p className="text-xs text-gray-500">Each item spans 12 cols (mobile) → 6 cols (sm) → 3 cols (md) = 2 items per row → 4 items per row</p>
                </div>

                <div>
                  <h5 className="h5 text-neutral-10 mb-3 mt-6">Pattern: 2-Column Split (6+6)</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-100 p-4 rounded text-center h-24 flex items-center justify-center text-xs">
                      Left (col-span-6)
                    </div>
                    <div className="bg-green-100 p-4 rounded text-center h-24 flex items-center justify-center text-xs">
                      Right (col-span-6)
                    </div>
                  </div>
                  <code className="bg-gray-100 px-2 py-1 rounded block text-xs mb-3">
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  </code>
                </div>

                <div>
                  <h5 className="h5 text-neutral-10 mb-3 mt-6">Pattern: Sidebar Layout (8+4)</h5>
                  <div className="grid grid-cols-12 gap-4 mb-3">
                    <div className="col-span-12 md:col-span-8 bg-purple-100 p-4 rounded text-center h-32 flex items-center justify-center text-xs">
                      Main Content (col-span-8 on desktop)
                    </div>
                    <div className="col-span-12 md:col-span-4 bg-purple-100 p-4 rounded text-center h-32 flex items-center justify-center text-xs">
                      Sidebar (col-span-4 on desktop)
                    </div>
                  </div>
                  <code className="bg-gray-100 px-2 py-1 rounded block text-xs mb-3">
                    &lt;div className="grid grid-cols-12 gap-4"&gt;{'\n'}
                    &nbsp;&nbsp;&lt;div className="col-span-12 md:col-span-8"&gt;...&lt;/div&gt;{'\n'}
                    &nbsp;&nbsp;&lt;div className="col-span-12 md:col-span-4"&gt;...&lt;/div&gt;{'\n'}
                    &lt;/div&gt;
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Gap Spacing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="h5 text-neutral-10 mb-2">gap-2 (0.5rem)</h5>
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-blue-100 p-2 rounded text-center text-xs">
                          Item
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="h5 text-neutral-10 mb-2">gap-4 (1rem)</h5>
                    <div className="grid grid-cols-4 gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-blue-100 p-2 rounded text-center text-xs">
                          Item
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="h5 text-neutral-10 mb-2">gap-6 (1.5rem)</h5>
                    <div className="grid grid-cols-4 gap-6">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-blue-100 p-2 rounded text-center text-xs">
                          Item
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="h5 text-neutral-10 mb-2">gap-8 (2rem)</h5>
                    <div className="grid grid-cols-4 gap-8">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-blue-100 p-2 rounded text-center text-xs">
                          Item
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mt-4 pt-4 border-t">
                    Use <code className="bg-gray-100 px-1 rounded">gap-2</code>, <code className="bg-gray-100 px-1 rounded">gap-4</code>, <code className="bg-gray-100 px-1 rounded">gap-6</code>, <code className="bg-gray-100 px-1 rounded">gap-8</code> for consistent spacing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="h2 text-neutral-10 mb-8">Best Practices</h2>

            <Card>
              <CardHeader>
                <CardTitle className="h4">Usage Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="h5 text-neutral-10 mb-2">✓ Do's</h5>
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
                  <h5 className="h5 text-neutral-10 mb-2">✗ Don'ts</h5>
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
