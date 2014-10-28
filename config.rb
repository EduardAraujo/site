###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
with_layout :docs do
  page "/docs/*"
end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

set :markdown, :no_intra_emphasis  => true,
               :tables             => true,
               :gh_blockcode       => true,
               :fenced_code_blocks => true,
               :autolink           => true,
               :strikethrough      => true,
               :lax_html_blocks    => true,
               :superscript        => true,
               :with_toc_data      => true,
               :hard_wrap          => true,
               :smartypants        => true

set :markdown_engine, :redcarpet

activate :syntax

activate :blog do |blog|
  blog.layout            = "blog"
  blog.prefix            = "blog"
  blog.permalink         = ":year/:month/:title.html"
  blog.sources           = "articles/:year/:month/:title.html"
  blog.paginate          = true
  blog.tag_template      = "blog/tag.html"
  blog.calendar_template = "blog/calendar.html"
end

activate :directory_indexes

# Need the extension for error pages
page "404.html", :directory_index => false
page "50x.html", :directory_index => false

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  def nav_pages(url)
    sitemap.resources.select do |r|
      r.url === url.split("/")[0..2].join("/") + "/"
    end
  end
  # Returns all pages under a certain directory.
  def sub_pages(dir)
    sitemap.resources.find_resource_by_path(dir)
    # sitemap.resources.select do |resource|

    #   resource.path.start_with?(dir)
    # end
  end

end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'img'

set :partials_dir, 'partials'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :gzip
  activate :cache_buster

  # Enable cache buster
  activate :asset_hash

end
