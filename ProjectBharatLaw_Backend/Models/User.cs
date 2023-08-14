using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BharatLaw.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string? Organization { get; set; }
        public string? ContactNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string? Token { get; set; }

        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }

        [JsonIgnore]

        public virtual ICollection<ResearchBook> ResearchBooks { get; set;}
    }
}
